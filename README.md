# Streaming downloader

Streaming downloader, served as infrastructure, extensible with plugins.  
Provides a system to control a list of streamings.

## Architecture

The software is composed by:
- a **Core** written in Go: accepts download commands, allows a client to connect to receive updates on the streams
- a **Web UI** written with ASP.NET Core: allows to control a graphical interface
- a **Plugin adapter** written in Typescript: communicates with the core and forwards plugins' requests and logs
- a **list of Plugins** written in Javascript/Typescript: can add and control streams

## Development
### Requirements

- `Powershell`
- `Protoc`
- `yarn`