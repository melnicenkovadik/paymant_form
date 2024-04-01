import { Box, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export const LanguageSwitcher = () => {
  const { t } = useTranslation('common')
  const languages = [
    {
      id: 1,
      name: 'English',
      shortName: 'En',
      code: 'en',
    },
    {
      id: 2,
      name: 'Lithuanian',
      shortName: 'Lt',
      code: 'lt',
    },
  ]
  const locale = useTranslation()
  const currentLocale = locale.i18n.language
  const router = useRouter()
  return (
    <Box>
      {languages.map((language) => (
        <Link href={`/${language.code}${router.asPath}`} locale={language.code} key={language.id}>
          <Button disabled={currentLocale === language.code}>{t(language.name)}</Button>
        </Link>
      ))}
    </Box>
  )
}
