package hello.hellospring.exception;

public class CommonException extends Exception {

    /** 필수항목이 누락됨 */
    public static final int NO_REQUIRED_ITEM = 1000;

    /** DTO 값 없음 */
    public static final int NO_REQUIRED_DTO = 1001;

    protected int error_code;

    public CommonException(int error_code) {
        this.error_code = error_code;
    }

    public int getErrorCode() {
        return error_code;
    }

}
