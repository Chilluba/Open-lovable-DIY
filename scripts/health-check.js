#!/usr/bin/env node

/**
 * Simple monitoring script for Open Lovable DIY
 * Checks API endpoints and environment configuration
 */

import https from 'https';
import http from 'http';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env');

try {
  const envContent = readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      const value = valueParts.join('=').trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
} catch (error) {
  console.log('⚠️  Could not load .env file, using system environment variables only');
}

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

async function checkEndpoint(path, expectedStatus = 200) {
  return new Promise((resolve) => {
    const url = `${BASE_URL}${path}`;
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      const isHealthy = res.statusCode === expectedStatus;
      resolve({
        path,
        status: res.statusCode,
        healthy: isHealthy,
        timestamp: new Date().toISOString()
      });
    });
    
    req.on('error', (err) => {
      resolve({
        path,
        status: 'ERROR',
        healthy: false,
        error: err.message,
        timestamp: new Date().toISOString()
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        path,
        status: 'TIMEOUT',
        healthy: false,
        error: 'Request timeout',
        timestamp: new Date().toISOString()
      });
    });
  });
}

async function runHealthCheck() {
  console.log('🔍 Running health check for Open Lovable DIY...\n');
  
  const endpoints = [
    { path: '/', expectedStatus: 200 },
    { path: '/api/health', expectedStatus: 200 },
    { path: '/api/validate-api-key', expectedStatus: 405 }, // Method not allowed for GET
  ];
  
  const results = [];
  
  for (const endpoint of endpoints) {
    const result = await checkEndpoint(endpoint.path, endpoint.expectedStatus);
    results.push(result);
    
    const status = result.healthy ? '✅' : '❌';
    console.log(`${status} ${result.path} - Status: ${result.status}`);
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
  }
  
  const healthyCount = results.filter(r => r.healthy).length;
  const totalCount = results.length;
  
  console.log(`\n📊 Health Check Summary:`);
  console.log(`   Healthy: ${healthyCount}/${totalCount}`);
  console.log(`   Status: ${healthyCount === totalCount ? '✅ All systems operational' : '⚠️  Some issues detected'}`);
  
  // Check environment variables
  console.log(`\n🔧 Environment Check:`);
  const envVars = [
    'E2B_API_KEY',
    'GROQ_API_KEY', 
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL',
    'NEXT_PUBLIC_APP_URL'
  ];
  
  envVars.forEach(varName => {
    const exists = !!process.env[varName];
    const status = exists ? '✅' : '❌';
    console.log(`   ${status} ${varName}: ${exists ? 'Set' : 'Missing'}`);
  });
  
  process.exit(healthyCount === totalCount ? 0 : 1);
}

// Run health check if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runHealthCheck().catch(console.error);
}

export { checkEndpoint, runHealthCheck };