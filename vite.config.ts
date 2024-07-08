
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const src = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv) => {
  console.log('🚀 ~ mode command:', mode, command)

  return defineConfig({
    resolve: {
      alias: {
        '@/': `${src}/`,
        'common/': `${src}/common/`,
        'components/': `${src}/components/`,
        'hooks/': `${src}/hooks/`,
        'store/': `${src}/store/`,
        'utils/': `${src}/utils/`,
        'plugins/': `${src}/plugins/`,
        'pages/': `${src}/pages/`,
      },
    },
    plugins: [react()],
  })
}

