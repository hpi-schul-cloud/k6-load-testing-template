# k6-load-testing-template
K6 template repository for load and performance testing. Inspired by the amazing work done by the GitLab Team. [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance/-/blob/main/k6)

Example run:
```bash
ENV_FILE=config/environments/k6.json OPTIONS_FILE=config/options/k6.json k6 run tests/api/simple.js
```