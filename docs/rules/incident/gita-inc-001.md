---
sidebar_position: 1
---
# Container status is unhealthy

Docker containers have a built in mechanism for detecting whether a
program is behaving as expected or not. This mechanism is called Health
Check.

The Health Check ought to be specified when the container is built, as a
command to attest the runtime integrity of the program. This makes the
container carry with itself a health status, being `healthy` when it
passes the check, and `unhealthy` otherwise.

For more information, visit the Docker
[documentation](https://docs.docker.com/engine/reference/builder/#healthcheck)

