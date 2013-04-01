<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html style="overflow-y:scroll" xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Yup</title>
		<link rel="stylesheet" href="cmh-li-tree.css" media="all">
	</head>
	<body>
		<ul id="testID" class="litree">
			<li class="tree_subset">
				<h2 class="tree_header">Header 1</h2>
				<ul class="tree_collapse tree_open">
					<li>A</li>
					<li>B</li>
					<li>C</li>
					<li>D</li>
					<li>E</li>
				</ul>
			</li>
			<li class="tree_subset">
				<h2 class="tree_header">Header 2</h2>
				<ul class="tree_collapse">
					<li>A</li>
					<li>B</li>
					<li>C</li>
					<li>D</li>
					<li>
						<h2 class="tree_header">Header 3</h2>
						<ul class="tree_collapse tree_open">
							<li>A</li>
							<li>B</li>
							<li>C</li>
							<li>D</li>
							<li>
								<h2 class="tree_header">Header 4</h2>
								<ul class="tree_collapse">
									<li>A</li>
									<li>B</li>
									<li>
										<h2 class="tree_header">Header 5</h2>
										<ul class="tree_collapse tree_open">
											<li>A</li>
											<li>B</li>
											<li>C</li>
											<li>D</li>
											<li>E</li>
										</ul>
									</li>
									<li>D</li>
									<li>E</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
		<button id="tree_collapse_rows">tree_collapse Rows</button>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
		<script type="text/javascript" src="cmh-li-tree.js"></script>
	</body>
</html>