---
sidebar_position: 26
---
# Prevent NGINX Ingress annotation snippets which contain LUA code execution. See CVE-2021-25742

Ingress is a Kubernetes native solution for routing incoming traffic to
the cluster to specific services according to a set of defined routing
rules based on the request path. There are many implementations of
Ingress controllers, where Ingress-Nginx is a very popular one due to
its compatibility with Nginx, the robust and time-tested proxy.

The Ingress-Nginx controller make use of the _lua-nginx-module_ to embed
a Lua interpreter in the proxy, thus enabling scripts to configure
routing rules. This feature however has been the gate for
_CVE-2021-25742_, an Ingress-Nginx vulnerability in which a user that
can create or update Ingress objects is also able to use Lua scripts
through annotations in order to obtain all Secrets in the cluster.

To mitigate this, remove any Lua script annotations, upgrade to a
version higher than v0.49.1 or v1.0.1 and set the
`allow-snippet-annotations` Nginx configuration option to `false`.

For more information, visit the bug
[report](https://github.com/kubernetes/ingress-nginx/issues/7837)

