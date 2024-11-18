public class Solution {
    public int[] Decrypt(int[] circ, int k) {
        int n = circ.Length;
        int[] result = new int[n];
        
        if (k == 0) return result;
        
        int wSum = 0;
        int start = (k > 0) ? 1 : n + k;
        int end = (k > 0) ? k : n - 1;
        
        for (int i = start; i <= end; i++) {
            wSum += circ[i % n];
        }
        
        for (int i = 0; i < n; i++) {
            result[i] = wSum;
            wSum -= circ[(start + i) % n];
            wSum += circ[(end + i + 1) % n];
        }
        
        return result;
    }
}