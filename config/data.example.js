const DIR = '/Users/tangliang/Projects/NewsDog';
module.exports = {
   'OPFE': [
        {
            cwd: `${DIR}/OPFE`,
            script: 'npm run build',
            branch: 'master'
        },
        {
            cwd: `${DIR}/OPFE`,
            script: 'npm run build',
            branch: 'next'
        }
   ]
}