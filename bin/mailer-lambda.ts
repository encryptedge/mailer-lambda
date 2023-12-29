#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";

import "source-map-support/register";

import { MailerStack } from "../lib/cdk-stack";
import { getConfig } from "../lib/config";

const config = getConfig();
const app = new cdk.App();

new MailerStack(app, "MailerLambdaStack", {
  config
});