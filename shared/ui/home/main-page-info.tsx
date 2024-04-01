import { Box } from '@mui/material'
import FormWrapper from 'features/payment-form/form-wrapper'
import PaymentForm from 'features/payment-form/payment-form'

export const MainPageInfo = () => {
  return (
    <Box sx={{ p: 2 }}>
      <FormWrapper>
        <PaymentForm />
      </FormWrapper>
    </Box>
  )
}
