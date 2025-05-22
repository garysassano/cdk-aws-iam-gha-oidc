# cdk-aws-iam-gha-oidc

CDK app that creates an OIDC identity provider and an IAM role, enabling secure authentication in GitHub Actions workflows without long-lived AWS credentials.

## Prerequisites

- **_AWS:_**
  - Must have authenticated with [Default Credentials](https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli_auth) in your local environment.
  - Must have completed the [CDK bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) for the target AWS environment.
- **_Node.js + npm:_**
  - Must be [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in your system.

## Configuration

Update the OIDC subject claim in `src/stacks/my-stack.ts`:

```typescript
"token.actions.githubusercontent.com:sub": "repo:gh-owner/gh-repo:*"
```

Replace `gh-owner/gh-repo` with your actual GitHub organization/username and repository name.

## Installation

```sh
npx projen install
```

## Deployment

```sh
npx projen deploy
```

## Usage

In a GitHub Actions workflow, assume the IAM role you've just created (replace `<AWS_ACCOUNT_ID>`):

```yaml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::<AWS_ACCOUNT_ID>:role/GhaOidcRole
    aws-region: eu-central-1
```

## Cleanup

```sh
npx projen destroy
```
