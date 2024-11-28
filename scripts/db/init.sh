#!/bin/bash

chmod +x /scripts/db/dump.sql

psql -U $POSTGRES_USER -d $POSTGRES_DB -a -f /scripts/db/dump.sql