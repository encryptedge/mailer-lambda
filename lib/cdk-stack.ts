import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigw from 'aws-cdk-lib/aws-apigateway'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { ConfigProps } from './config'

type MailerLambdaStack = cdk.StackProps & {
  config: Readonly<ConfigProps>
}

export class MailerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MailerLambdaStack) {
    super(scope, id, props)

    const { config } = props;

    const fn = new NodejsFunction(this, 'lambda', {
      entry: 'lambda/index.ts',
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_20_X,
      environment: {
        MAIL_HOST: config.MAIL_HOST,
        MAIL_PORT: config.MAIL_PORT,
        MAIL_USER: config.MAIL_USER,
        MAIL_PASS: config.MAIL_PASS,
        MAIL_LOGGER: config.MAIL_LOGGER,
        MAIL_FROM_EMAIL: config.MAIL_FROM_EMAIL,
        MAIL_FROM_NAME: config.MAIL_FROM_NAME,
      }
    })
    fn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    })
    new apigw.LambdaRestApi(this, 'mailerapi', {
      handler: fn,
    })
  }
}