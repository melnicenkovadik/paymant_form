import PaymentForm from 'features/payment-form/payment-form'
import FormWrapper from 'features/payment-form/form-wrapper'
import { Box } from '@mui/material'

export const MainPageInfo = () => {
  return (
    <Box sx={{ p: 2 }}>
      <FormWrapper>
        <PaymentForm />
      </FormWrapper>
    </Box>
  )
}
