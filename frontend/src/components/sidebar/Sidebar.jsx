const Sidebar = () => {
	return (
	  <div className="border-r border-slate-500 p-4 flex flex-col md:w-64 lg:w-72">
		<SearchInput />
		<div className="divider px-3"></div>
		<Conversations />
		<LogoutButton />
	  </div>
	);
  };
  export default Sidebar;
  