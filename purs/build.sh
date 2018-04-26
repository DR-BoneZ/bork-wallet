#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
pulp build && pulp test && purs-tsd-gen -d "$DIR/output/" Main
