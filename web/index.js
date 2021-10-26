const express = require('express');

const servidor = express();

servidor.use(express.jason());

const TaskRouters = require('./routes/TaskRoute');

servidor.use('/task',TaskRouters);

servidor.listen(3000)