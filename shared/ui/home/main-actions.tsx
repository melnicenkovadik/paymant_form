import {Box} from "@mui/material";
import {LanguageSwitcher} from "shared/common/language-switcher";
import {useContext} from "react";
import {DataContext} from "../../../providers/data-provider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Course from "../../common/course";

export const MainActions = () => {
    const context = useContext(DataContext);
    const payerAccounts = context.data.payerAccounts;
    const selectedPayerAccount = context.data.selectedPayerAccount;
    const setPayerAccount = (id: string) => {
        const account = payerAccounts.find((account) => account.id === id);
        if (account) {
            context.setData({
                selectedPayerAccount: account,
            });
        }
    };
    return (
        <Box sx={{p: 2}}>
            <Course/>
            <LanguageSwitcher/>
            <Box>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedPayerAccount.id}
                        label=""
                        onChange={
                            (event: SelectChangeEvent) => {
                                setPayerAccount(event?.target?.value);
                            }
                        }
                    >
                        {
                            payerAccounts.map((account) => (
                                <MenuItem key={account.id} value={account.id}>{account.iban}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
        </Box>
    );
};
