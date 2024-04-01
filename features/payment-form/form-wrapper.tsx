import {Box, Button} from "@mui/material";
import React, {FC, useContext} from "react";
import {FormProvider, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslation} from "next-i18next";
import {DataContext} from "../../providers/data-provider";
import toast from "react-hot-toast";

const validationSchema = yup.object().shape({
    amount: yup
        .number()
        .required("Amount is required")
        .min(0.01, "Amount must be at least 0.01")
        .max(1000, "Amount must be at most 1000")
        .typeError("Amount must be a number"),
    payeeAccount: yup
        .string()
        .typeError("Payee Account must be a string"),
    purpose: yup
        .string()
        .required("Purpose is required")
        .min(3, "Purpose must be at least 3 characters")
        .max(135, "Purpose must be at most 135 characters")
        .typeError("Purpose must be a string"),
    payerAccount: yup
        .string()
        .required("Payer Account is required")
        .typeError("Payer Account must be a string"),
    payee: yup
        .string()
        .required("Payee is required")
        .max(70, "Payee must be at most 70 characters")
        .typeError("Payee must be a string"),
});

const FormWrapper: FC<any> = ({children}) => {
    const {t} = useTranslation("common");
    const context = useContext(DataContext);
    const selectedPayerAccount = context.data.selectedPayerAccount;

    const useHookForm = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            amount: undefined,
            payeeAccount: selectedPayerAccount?.data?.iban,
            purpose: "",
            payerAccount: "",
            payee: "",
        },
        mode: "onChange",
    });

    const onFormSubmit = async (data: any) => {
        if (selectedPayerAccount?.data?.rest < 0) {
            useHookForm.setError("amount", {
                type: "manual",
                message: "Payer Account balance is not enough",
            });
            return;
        }

        try {
            const response = await fetch(`https://matavi.eu/validate?iban=${data.payerAccount}`);
            const result = await response.json();
            // @ts-ignore
            if (result.valid) {
                toast("Payment is successful", {
                    icon: "👏",
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                        margin: "20px",
                    },
                });
                context.setData({
                    selectedPayerAccount: {
                        ...selectedPayerAccount,
                        balance: selectedPayerAccount.balance - data.amount,
                    },
                });
                useHookForm.reset();
            } else {
                useHookForm.setError("payerAccount", {
                    type: "manual",
                    message: "Invalid Payee Account",
                });
            }
        } catch (error) {
            console.error("error", error);
        }
    };
    return (
        <FormProvider {...useHookForm}>
            <form noValidate onSubmit={useHookForm.handleSubmit(onFormSubmit)}>
                {children}
                <Box display="flex" justifyContent="center" mt={3}>
                    <Button type="submit" variant="contained" color="primary">
                        {t("submit")}
                    </Button>
                </Box>
            </form>
        </FormProvider>
    );
};

export default FormWrapper;
