import path from 'path';
import sassTrue from 'sass-true';

var sassFile = path.join(__dirname, 'test.sass');
sassTrue.runSass({file: sassFile}, describe, it);
