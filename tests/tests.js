QUnit.test("Test calcScore function", function(assert) {
    assert.ok(2 == calcScore(2));
    assert.ok(5 == calcScore(4));
    assert.ok(25 == calcScore(16));
    assert.ok(2000 == calcScore(1024));
    assert.ok(32500 == calcScore(16384));
    assert.ok(0 == calcScore(1234));
});

QUnit.test("Test addScore function", function(assert) {
    score = 0;
    addScore(1024);
    assert.ok(2000 == score);
    addScore(2);
    assert.ok(2002 == score);
});

QUnit.test("Test init grid function", function(assert) {
   var countSet = 0;
   initGrid();
   assert.ok(grid.length == 4);
   for (var i = 0; i < grid.length; ++i) {
      assert.ok(4 == grid[i].length);
      for (var j = 0; j < grid.length; ++j) {
          if (grid[i][j] != -1) {
              ++countSet;
              assert.ok(2 == grid[i][j]);
          }
      }
   }
   assert.ok(2 == countSet);
});

QUnit.test("Test moveGrid function", function(assert) {
  // TODO: pretty hard. Will do that later. Let's assume
  // it works for now.
  assert.ok(false === true);
});
