// CMH LI Tree - I had a need to create a presentation that acted as a tree view and ended up with this
// this is the absolute basic version there of
//
// Copyright (c) 2012 Christopher Hacia git@chrishacia.com
// Website: http://www.chrishacia.com/scripts/cmh-li-tree
// Licensed under the MIT license: http://www.tree_opensource.org/licenses/mit-license.php



//NOTES:
// Work up some better commenting..
// Convert normal functions to class based
var elemID = 'testID';
function tree_collapsetree_openRowSubs(elemID)
{
	$('ul#'+elemID).find('ul').addClass('tree_collapse').removeClass('tree_open');
}
//finds any ul's with the class "tree_open" (rendered at time of load)
//and tree_opens them for show.
function zebraStyle(elemID)
{
	$('ul#'+elemID+' > li, ul#'+elemID+' ul > li:nth-child(odd)').addClass('li_odds');
	$('ul#'+elemID+' > li, ul#'+elemID+' ul > li:nth-child(even)').addClass('li_evens');
}
function findtree_openRowSubs()
{
	$('ul.tree_open')
	.removeClass('tree_collapse tree_open')
    .parentsUntil('.tree_subset', 'ul.tree_collapse')
    .removeClass('tree_collapse tree_open');
}
$('ul#'+elemID+' > li > h2, ul#'+elemID+' ul > li > h2').click(function()
{
	var $setEl = $(this).next('ul');
	if($setEl.hasClass('tree_collapse'))
	{
		$setEl.removeClass('tree_collapse');
	}
	else
	{
		$setEl.addClass('tree_collapse');
	}
});
$('#tree_collapse_rows').click(function(){
	tree_collapsetree_openRowSubs(elemID);
});

$(document).ready(function()
{
	findtree_openRowSubs(elemID);
	zebraStyle(elemID);
});