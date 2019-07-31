#!/usr/bin/env node

import { Controller } from './controller';
import { ConsoleService } from './services/console.service';
import { FileService } from './services/files.service';
import { SpinnerService } from './services/spinner.service';
import { UpdateService } from './services/update.service';
import { HttpsService } from './services/https.service';

const controller = new Controller(
  new ConsoleService(),
  new FileService(),
  new SpinnerService(),
  new UpdateService(new HttpsService()),
);
