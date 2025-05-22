import { App } from "aws-cdk-lib";
import { MyStack } from "./stacks/my-stack.js";

const app = new App();

new MyStack(app, "cdk-aws-iam-gha-oidc-dev", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

app.synth();
