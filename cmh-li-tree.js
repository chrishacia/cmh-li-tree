// CMH LI Tree - I had a need to create a presentation that acted as a tree view and ended up with this
// this is the absolute basic version there of
//
// Copyright (c) 2012 Christopher Hacia git@chrishacia.com
// Website: http://www.chrishacia.com/scripts/cmh-li-tree
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php



//NOTES:
// Work up some better commenting..
// Convert normal functions to class based
var elemID = 'testID';
function collapseOpenRowSubs(elemID)
{
	$('ul#'+elemID).find('ul').addClass('collapse').removeClass('open');
}
//finds any ul's with the class "open" (rendered at time of load)
//and opens them for show.
function zebraStyle(elemID)
{
	$('ul#'+elemID+' > li, ul#'+elemID+' ul > li:nth-child(odd)').addClass('li_odds');
	$('ul#'+elemID+' > li, ul#'+elemID+' ul > li:nth-child(even)').addClass('li_evens');
}
function findOpenRowSubs()
{
	$('.open')
	.removeClass('collapse open')
    .parentsUntil('.subset', 'ul.collapse')
    .removeClass('collapse open');
}
$('ul#'+elemID+' > li > h2, ul#'+elemID+' ul > li > h2').click(function()
{
	var $setEl = $(this).next('ul');
	if($setEl.hasClass('collapse'))
	{
		$setEl.removeClass('collapse');
	}
	else
	{
		$setEl.addClass('collapse');
	}
});
$('#collapse_rows').click(function(){
	collapseOpenRowSubs(elemID);
});

$(document).ready(function()
{
	findOpenRowSubs(elemID);
	zebraStyle(elemID);
});