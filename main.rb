require 'sinatra'

#to load the page is get 'path' do~end is called block and there would be logic of site there
#get('/') 
 get '/' do    
   erb :index, layout:false 
   #return erb(:index) last line of every block it only that will be display
end

 get '/info' do    
  erb :info
end

 get '/menu' do    
   erb :menu
   #"This is where you contact me"   
end

 get '/reservation' do    
   erb :reservation
   #"This is where you contact me"   
end

post '/res_response' do
	erb :res_response
	
end
