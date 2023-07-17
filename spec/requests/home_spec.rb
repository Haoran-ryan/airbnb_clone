require 'rails_helper'

RSpec.describe "Homes", type: :request do
  describe "GET /index" do
    # ‘succeeds’ 这个部分是对成功完成 do ...end 里面的代码的描述，可以写成如”成功访问主页……“
    it "succeeds" do
      get root_path
      expect(response).to have_http_status(200)
    end
  end

end
