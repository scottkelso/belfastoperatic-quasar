import Amplify from 'aws-amplify'
import AwsExports from '../../../src/aws-exports'
import {
  applyPolyfills,
  defineCustomElements
} from '@aws-amplify/ui-components/loader'

Amplify.configure(AwsExports)

applyPolyfills().then(() => {
  defineCustomElements(window)
})

export default ({ app, router, store }) => {
  app.config.isCustomElement = tag => tag.startsWith('amplify-')
}
