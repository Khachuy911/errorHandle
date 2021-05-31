class ErrorResponse extends Error{
	constructor(statusCode, message){
		super(message)
		this.statusCode = statusCode
	}
}
module.exports = ErrorResponse;
//1. Sẽ được nằm trong folder helpers
//2.Tạo ra 1 errorResponse và thêm 1 thuộc tính cho error đó là statusCode
// và kế thừa message từ Error