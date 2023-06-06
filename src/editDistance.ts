export const editDistance = (a: string, b: string): number => {
  const aArray = Array.from(a);
  const bArray = Array.from(b);

  const aLen = aArray.length;
  const bLen = bArray.length;

  // 編集距離が一定値以下かどうかを判定する
  const dp: number[][] = Array.from({ length: aLen + 1 }, () =>
    Array(bLen + 1).fill(0)
  );

  // 初期化
  for (let i = 0; i <= aLen; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= bLen; j++) {
    dp[0][j] = j;
  }

  // DPによる編集距離の計算
  for (let i = 1; i <= aLen; i++) {
    for (let j = 1; j <= bLen; j++) {
      if (aArray[i - 1] === bArray[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // 削除
          dp[i][j - 1] + 1, // 挿入
          dp[i - 1][j - 1] + 1 // 置換
        );
      }
    }
  }

  return dp[aLen][bLen];
};
