import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

export const DataContext = createContext<any>(null)

interface IDataProvider {
  children: ReactNode
  value?: any
}

const payerAccounts = [
  {
    iban: 'LT307300010172619160',
    id: '1',
    balance: 1000.12,
  },
  {
    iban: 'LT307300010172619161',
    id: '2',
    balance: 2.43,
  },
  {
    iban: 'LT307300010172619162',
    id: '3',
    balance: -5.87,
  },
]

const oneEurToLtl = 3.41
const oneLtlToEur = 0.29

export const DataProvider: FC<IDataProvider> = ({ children }) => {
  const { t } = useTranslation('common')
  const isEuro = t('symbol') === '€'

  const [data, setDataInfo] = useState<any>({
    payerAccounts,
    selectedPayerAccount: payerAccounts[0],
    oneEurToLtl,
    oneLtlToEur,
  })

  useEffect(() => {
    if (isEuro) {
      setDataInfo((prevData) => ({
        ...prevData,
        payerAccounts: prevData.payerAccounts.map((account) => ({
          ...account,
          balance: +(account.balance * oneLtlToEur).toFixed(2),
        })),
        selectedPayerAccount: {
          ...prevData.selectedPayerAccount,
          balance: +(prevData.selectedPayerAccount.balance * oneLtlToEur).toFixed(2),
        },
      }))
    } else {
      setDataInfo((prevData) => ({
        ...prevData,
        payerAccounts,
        selectedPayerAccount: payerAccounts[prevData.selectedPayerAccount.id - 1],
      }))
    }
  }, [isEuro])
  const setData = (data: any) => {
    setDataInfo((prevData) => ({
      ...prevData,
      ...data,
    }))
  }
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
