import React, { useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { DataContext } from '../../../providers/data-provider'

const AccountBalance = () => {
  const { t } = useTranslation('common')
  const context = useContext(DataContext)
  const { selectedPayerAccount } = context.data

  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setLoading(false)
  }, [selectedPayerAccount])

  return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <Typography variant='body1'>{t('balance')}</Typography>
          <Typography variant='caption'>
            {loading ? '???' : selectedPayerAccount.balance} {t('symbol')}
          </Typography>
        </Box>
      </Grid>
      {context?.data?.rest ? (
        <Grid item xs={6}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
            <Typography variant='body1'>{t('rest')}</Typography>
            <Typography variant='caption'>
              {context?.data?.rest < 0 ? 0 : context?.data?.rest} {t('symbol')}
            </Typography>
          </Box>
        </Grid>
      ) : null}
    </Grid>
  )
}

export default AccountBalance
