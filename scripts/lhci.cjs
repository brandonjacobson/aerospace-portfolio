/**
 * Lighthouse CI Runner (QA-Agent)
 * Runs Lighthouse performance audits
 * Asserts: Perf ≥ 0.90, CLS ≤ 0.10
 */

const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

async function runLighthouse() {
  console.log('Starting Lighthouse CI audit...');

  try {
    // Start the server
    console.log('Building and starting production server...');
    await execAsync('npm run build');

    const server = exec('npm run start');

    // Wait for server to be ready
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Run Lighthouse CI
    console.log('Running Lighthouse audits...');
    const { stdout, stderr } = await execAsync('npx lhci autorun');

    console.log(stdout);
    if (stderr) console.error(stderr);

    // Kill the server
    server.kill();

    console.log('✓ Lighthouse CI completed successfully');
  } catch (error) {
    console.error('Lighthouse CI failed:', error);
    process.exit(1);
  }
}

runLighthouse();
