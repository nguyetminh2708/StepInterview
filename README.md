# StepInterview
FE (web có thể dùng reactjs / javascript / mvc / angular/ vuejs.., ưu tiên reactjs): 
- Cho phép người dùng nhập vào danh sách Customer (Full Name, Date of Birth - DOB, Email), Shop (Name, Location) và Product (Name, Image, Price). Một Customer có thể mua nhiều Product ở nhiều Shop. 
- Một Shop có nhiều Product. 
- Cần nhập ít nhất là 30 Customer, 3 Shop, và 32768 Product, nếu ko đủ sẽ có thông báo lỗi không đủ dữ liệu. Cho phép người dùng thực hiện tìm kiếm Product.

BE (.net/sql): 
- Lưu trữ Customer/Shop/Product vào database.
- Load dữ liệu từ database và tiến hành sắp xếp theo qui luật: Customer.Email theo thứ tự alphabet tăng dần, Shop.
- Location theo thứ tự alphabet giảm dần, Product.
- Price theo thứ tự giảm dần => Kết quả sắp xếp sẽ được trả về FE để hiện thị lên UI.

--> FE OUTPUT:

Table Headers
------------------------------------------------------------------------
  Customer (Name - Email) | Shop (Name - Location)| Product (Name - Image - Price)
  ------------------------------------------------------------------------
  Customer (Name - Email) | Shop (Name - Location)| Product (Name - Image - Price)
  ------------------------------------------------------------------------
  Customer (Name - Email) | Shop (Name - Location)| Product (Name - Image - Price)
  ------------------------------------------------------------------------
...

==> làm video ngắn giải thích code flow và demo chạy tính năng trên UI
