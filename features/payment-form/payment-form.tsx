import {useContext, useEffect} from "react";
import {useFormContext} from "react-hook-form";
import {Grid, InputAdornment, TextField, Typography} from "@mui/material";
import {useTranslation} from "next-i18next";

import {DataContext} from "../../providers/data-provider";
import AccountBalance from "../../shared/ui/home/account-balance";

const PaymentForm = () => {
    const {
        register,
        formState: {errors},
        setValue,
        setError,
        watch,
        clearErrors,
    } = useFormContext();
    const {t} = useTranslation("common");
    const context = useContext(DataContext);
    const amount = watch("amount");
    useEffect(() => {
        if (amount === "") {
            context.setData({
                rest: 0,
            });
        }
        if (amount && amount > 0) {
            const rest = +context.data.selectedPayerAccount.balance - +amount;
            context.setData({
                rest,
            });
        }
        if (+amount > +context.data.selectedPayerAccount.balance) {
            setError("amount", {
                type: "manual",
                message: "Amount is more than balance",
            });
        }
    }, [amount, context.data.rest]);
    console.log('context',context);
    useEffect(() => {
        setValue("amount", "");
        context.setData({
            rest: 0,
        });

        clearErrors("amount");
    }, [context.data.selectedPayerAccount.id]);

    const {selectedPayerAccount} = context.data;
    return (
        <Grid container gap={2}>
            <Grid xs={6}>
                <AccountBalance/>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="amount"
                    label={t("amount")}
                    fullWidth
                    {...register("amount")}
                    error={!!errors?.amount}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{t("symbol")}</InputAdornment>,
                    }}
                />
                {errors?.amount?.message && (
                    <Typography variant="caption" color="error">
                        {errors.amount.message}
                    </Typography>
                )}
            </Grid>
            <Grid xs={12}>
                <TextField
                    id="payeeAccount"
                    label={t("payeeAccount")}
                    fullWidth
                    {...register("payeeAccount", {
                        disabled: true,
                    })}
                    value={selectedPayerAccount.iban}
                    error={!!errors.payeeAccount}
                />
                {errors.payeeAccount && (
                    <Typography variant="caption" color="error">
                        {errors?.payeeAccount?.message}
                    </Typography>
                )}
            </Grid>
            <Grid xs={12}>
                <TextField
                    id="purpose"
                    label={t("purpose")}
                    fullWidth
                    {...register("purpose")}
                    error={!!errors.purpose}
                />
                {errors.purpose && (
                    <Typography variant="caption" color="error">
                        {errors?.purpose?.message}
                    </Typography>
                )}
            </Grid>
            <Grid xs={12}>
                <TextField
                    id="payerAccount"
                    label={t("payerAccount")}
                    fullWidth
                    {...register("payerAccount")}
                    error={!!errors.payerAccount}
                />
                {errors.payerAccount && (
                    <Typography variant="caption" color="error">
                        {errors?.payerAccount?.message}
                    </Typography>
                )}
            </Grid>
            <Grid xs={12}>
                <TextField
                    id="payee"
                    label={t("payee")}
                    fullWidth
                    {...register("payee")}
                    error={!!errors.payee}
                />
                {errors.payee && (
                    <Typography variant="caption" color="error">
                        {errors?.payee?.message}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default PaymentForm;
