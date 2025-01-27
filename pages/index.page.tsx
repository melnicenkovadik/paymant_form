import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DataProvider } from 'providers/data-provider'
import { Index } from 'shared/common/layout'
import { MainActions } from 'shared/ui/home/main-actions'
import { MainPageInfo } from 'shared/ui/home/main-page-info'

export default function Home() {
  return (
    <DataProvider>
      <Index actions={<MainActions />} mainPageInfo={<MainPageInfo />} />
    </DataProvider>
  )
}

export async function getStaticProps({ locale }) {
  const props = await serverSideTranslations(locale, ['common'])
  return {
    props: {
      id: 'home',
      ...props,
    },
  }
}
