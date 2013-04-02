// CMH LI Tree - I had a need to create a presentation that acted as a tree view and ended up with this
// this is the absolute basic version there of
//
// Copyright (c) 2012 Christopher Hacia git@chrishacia.com
// Website: http://www.chrishacia.com/scripts/cmh-li-tree
// Licensed under the MIT license: http://www.tree_opensource.org/licenses/mit-license.php



//NOTES:
// Work up some better commenting..
// Convert normal functions to class based
var theElem = '.litree';
function tree_collapsetree_openRowSubs(theElem)
{
	$('ul'+theElem).find('ul').addClass('tree_collapse').removeClass('tree_open');
}
//finds any ul's with the class "tree_open" (rendered at time of load)
//and tree_opens them for show.
function zebraStyle(theElem)
{
	//$('ul'+theElem+' > li, ul'+theElem+' ul > li:nth-child(odd)').addClass('li_odds');
	//$('ul'+theElem+' > li, ul'+theElem+' ul > li:nth-child(even)').addClass('li_evens');
	$('ul'+theElem+' li:nth-child(odd)').addClass('li_odds');
	$('ul'+theElem+' li:nth-child(even)').addClass('li_evens');
}
function findtree_openRowSubs()
{
	$('ul.tree_open')
	.removeClass('tree_collapse tree_open')
    .parentsUntil('.tree_subset', 'ul.tree_collapse')
    .removeClass('tree_collapse tree_open');
}
$('ul'+theElem+' > li > h2, ul'+theElem+' ul > li > h2').live('click',function()
{
	if(!$(this).hasClass('tree_no_toggle'))
	{
		var $setEl = $(this).next('ul');
		if($setEl.hasClass('tree_collapse'))
		{
			$setEl.removeClass('tree_collapse');//.addClass('tree_border');
		}
		else
		{
			$setEl.addClass('tree_collapse');//.removeClass('tree_border');
		}
	}
});
$('#tree_collapse_rows').live('click',function(){
	tree_collapsetree_openRowSubs(theElem);
});

$(document).ready(function()
{
	xm = new Array();
	//alert(typeof xm)
	findtree_openRowSubs(theElem);
	zebraStyle(theElem);
});

//<ul class="tree_open"> to invoke forced open of any ul/li and its parents.