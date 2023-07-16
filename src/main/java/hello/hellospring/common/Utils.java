package hello.hellospring.common;

import java.util.concurrent.ThreadLocalRandom;

// 공통 유틸 관리
public class Utils {
    static int g_count = 0;

    /**
     * @description 원하는 길이의 난수 반환
     * @param nSize 반환 받을 난수의 길이
     * @return sResult 결과 값
     */
    public static final String makeKey(int nSize) {
        String sResult = "";
        long tv = System.currentTimeMillis() / 1000L + (long)(g_count++);
        if (g_count > 1000) {
            g_count = 0;
        }

        sResult = Long.toHexString(tv) + Long.toHexString(Double.doubleToLongBits(Math.random()));
        int nLen = sResult.length();
        if (nLen > nSize) {
            return sResult.substring(0, nSize);
        } else {
            for(int i = nLen; i < nSize; ++i) {
                long lRand = (long)(Math.random() * 10.0D);
                sResult = sResult + lRand;
            }
            return sResult;
        }
    }

    /**
     * @description 원하는 길이의 랜덤 숫자 반환
     * @param len 반환 받을 숫자의 길이
     * @return result 결과 값
     */
    public static String getRandomLong(int len) {
        ThreadLocalRandom random = ThreadLocalRandom.current();
        String result = "";

        for(int i=0; i<len/10; i++) {
            result += random.nextLong(1_000_000_000L, 10_000_000_000L);
        }

        if(result.length() != len) {
            if(result.length() < len) {
                result += random.nextLong(1_000_000_000L, 10_000_000_000L);
            }
            result = result.substring(0, len);
        }
        return result;
    }

}
