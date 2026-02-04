# KALA CRE

Internal repository for KALA protocol oracles and workflows powered by Chainlink Runtime Environment (CRE).

## Setup

Ensure CRE CLI is installed and configured according to official documentation.

## Workflow Execution

To simulate and broadcast the KALA workflow:

1. Clone repository
```bash
git clone git@github.com:kala-money/cre.git
```

2. Navigate to the workflow directory:
```bash
cd kala-workflow
```
```bash
bun install
```

3. Execute simulation with broadcast to staging:
```bash
cre workflow simulate kala-workflow --target staging-settings --broadcast
```

### Configuration
- Targets are defined in `project.yaml`.
- Environment variables are managed in `.env`.
- Secrets are defined in `secrets.yaml`.
