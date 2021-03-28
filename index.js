$(".card__also-confirm-button").on('mouseover', function(){
    const offset = $(this).offset();
    const goX = Math.random() < 0.5 ? -1 : 1;
    const goY = Math.random() < 0.5 ? -1 : 1;
    $(this).css('top', offset.top + 70 * goY);
    $(this).css('left', offset.left + 70 * goX);
});