// if
// [regexp ==" ", text =" email@op.pl"] False
//[regexp =="^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$", text =""] False
//[regexp =="^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$", text =" email.com.pl"] False
//[regexp =="^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$", text =" email@plplplpl"] False
//[regexp =="^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$", text =" email.com.pl"] False
//[regexp =="^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$", text =" 123@123.pl"] False
//[regexp =="^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$", text =" email@op.pl"] true

// mamy sprawdzić czy w polu regexp znajduje się ciąg odpowiadający wyrażeniom regularnym
