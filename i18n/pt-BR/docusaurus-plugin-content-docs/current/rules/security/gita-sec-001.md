---
sidebar_position: 8
---
# Problem capabilities

Capabilities are a Linux specific set of permissions traditionally
reserved for the root user, which have been stratified into separate
privileges, thus allowing a more fine grained control of what each
process can do.

By default, the Docker runtime adds some capabilities to the containers
it creates. Following is a list of them with the privileges they grant:

- *AUDIT_WRITE:* append to the kernel audit log;
- *CHOWN:* change files' UIDs and GIDs;
- *DAC_OVERRIDE:* bypass Discretionary Access Control (DAC) checks for reading, writing and executing;
- *FOWNER:*
	- bypass file ownership checks;
	- set inode flags;
	- set Access Control Lists (ACLs) for any file;
	- ignore Sticky Bits on files;
	- modify Extended Attributes for any user;
	- open files without changing their last access time;
- *FSETID:* 
	- prevent SUID and SGID bits from being cleared when a file is
	modified;
	- set SGID for files with GIDs mismatching the filesystem's and the
	  process';
- *KILL:* bypass signal sending checks;
- *MKNOD:* create special files;
- *NET_BIND_SERVICE:* bind a socket to a port lower than 1024;
- *SETFCAP:* set capabilities on a file;
- *SETGID:* 
	- manipulate process GIDs;
	- create GIDs when authenticating with Unix domain sockets;
	- write GID mappings in user namespaces;
- *SETPCAP:* grant or revoke any capability;
- *SETUID:* 
	- manipulate process UIDs;
	- create UIDs when authenticating with Unix domain sockets;
	- write UID mappings in user namespaces;
- *SYS_CHROOT:* 
	- use chroots;
	- manipulate mount namespaces;

Kubernetes has a built-in mechanism for appending capabilities to a
containerized process, through its security context configuration.
However, it's important to stress that any capability added to a
process increases its attack surface together with the potential for
privilege escalation.

Unless the use case of your program strictly requires them, it's
recommended to drop all these capabilities. This can be done through the
security context as well, what is displayed in the manifest below:
