const { add } = require("./utils");

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`PASS: ${name}`);
    passed++;
  } catch (e) {
    console.log(`FAIL: ${name}`);
    console.log(`  ${e.message}`);
    failed++;
  }
}

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, got ${actual}`);
  }
}

// Tests
test("add(1, 2) should return 3", () => {
  assertEqual(add(1, 2), 3);
});

test("add(-1, 1) should return 0", () => {
  assertEqual(add(-1, 1), 0);
});

test("add(0, 0) should return 0", () => {
  assertEqual(add(0, 0), 0);
});

// Summary
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
