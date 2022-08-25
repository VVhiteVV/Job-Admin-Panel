$(document).ready(function () {
    let cur_p;
    let d;
    let files;
    let count = 0;
    $(".editor_body").on('keydown keyup keypress mousedown mouseup', (e) => {
        cur_p = saveSelection()
    })



    var saveSelection = () => {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                return sel.getRangeAt(0);
            }
        } else if (document.selection && document.selection.createRange) {
            return document.selection.createRange();
        }
        return null;
    }

    var restoreSelection = (range) => {
        if (range) {
            if (window.getSelection) {
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (document.selection && range.select) {
                range.select();
            }
            return true
        }
    }

    var displayLN = () => {
        var el_h = $(".editor_body").outerHeight()
        var lines = Math.floor(el_h / 20)
        $(".lineNumber").html("")
        for (var i = 1; i < lines; i++) {
            $(".lineNumber").append("<div>" + i + "</div>")
        }

    }

    displayLN()
    $(".editor_body").on('keydown keyup keypress mousedown mouseup', (e) => {
        displayLN()
    })

    $('.menu-item').each(function(){
        let item = $(this).find('.menu-content');
        item.fadeOut();
        $(this).hover(function (){
            $(this).css({
                "background-color": "var(--blue-light)",
                "color": "white"
            })
            $(this).find('.menu-content').css({
                "background-color": "white",
                "color": "var(--black-light)"
            })
        },function (){
            $(this).css({
                "background-color": "white",
                "color": "var(--black-light)"
            })
        })
        $(this).on('click',function (){
            let content = $(this).find('.menu-content');
            content.find('.img_dropdown_menu').hover(function (){
                $(this).css({
                    "background-color": "var(--blue-light)",
                    "color": "white"
                })
            },function (){
                $(this).css({
                    "background-color": "white",
                    "color": "var(--black-light)"
                })
            })
            if(content.attr('file-list') === 'off'){
               content.fadeIn();
               content.attr('file-list','on');
            }
            else{
                content.fadeOut();
                content.attr('file-list','off');
            }
        })
    })
     $(".toolbar_btn[data-cmd='insertFile']").each(function (){

         $(this).on('click',function (){
                $(this).parents('.redactor').find('.editor_body').focus();
                cur_p = saveSelection();
                let status = $(this);
             if(status.attr('status') === 'off'){
                  $(this).parent().find('.insertFile_btn_dropdown').css("display", 'block');
                 $(".imgUrl").click(() => {
                     $(".insertFile_btn_dropdown").css("display", 'none')
                     $(".editor_dataModal").css("display", 'flex')
                     $(".imgUrl_dataModal_content").css("display", 'block')
                 })
                 $(".img_insertBtn").click(() => {
                     var val = $('.img_url_inp').val();
                     // console.log(cur_p)
                     if (val && restoreSelection(cur_p)) {
                         // restoreSelection(cur_p)
                         document.execCommand('insertImage', false, val);
                         $(".img_url_inp").val("")
                         $(".editor_dataModal").css("display", 'none')
                         $(".imgUrl_dataModal_content").css("display", 'none')
                         status.attr('status','off')

                     }
                 })
                 $(".imgFile").click(() => {
                     $(".insertFile_btn_dropdown").css("display", 'none')
                     $(".editor_dataModal").css("display", 'flex')
                     $(".imgFile_dataModal_content").css("display", 'block')
                     document.getElementById('img-selector').addEventListener('change', event => {
                         const file = event.target.files[0];
                         const reader = new FileReader();
                         console.log(count)
                         reader.addEventListener('load', event => {
                             files = event.target.result;
                         });
                         reader.readAsDataURL(file);
                     });
                 })

                 $(".imgFile_insertBtn").click(() => {
                     var val = files;
                     console.log(files)
                     files = null;
                     // console.log(cur_p)
                     if (val && restoreSelection(cur_p)) {
                         // restoreSelection(cur_p)
                         document.execCommand('insertImage', false, val);
                         $('#img-selector').val('')
                         $(".editor_dataModal").css("display", 'none')
                         $(".imgFile_dataModal_content").css("display", 'none')
                         status.attr('status','off')
                     }

                 })
                 $(".FileUrl").click(() => {
                     $(".insertFile_btn_dropdown").css("display", 'none')
                     $(".editor_dataModal").css("display", 'flex')
                     $(".createFileUrl_dataModal_content").css("display", 'block')
                 })
                 $(".createFileUrl_insertBtn").click(() => {
                     var val = $('.createFileUrl_inp').val();
                     // console.log(cur_p)
                     if (val && restoreSelection(cur_p)) {
                         // restoreSelection(cur_p)
                         document.execCommand('insertHTML', false, '<a href="' + val + '" download>' + 'Скачать документ' + '</a>');
                         $(".createFileUrl_inp").val("")
                         $(".editor_dataModal").css("display", 'none')
                         $(".createFileUrl_dataModal_content").css("display", 'none')
                         status.attr('status','off')

                     }
                 })
                 $(".FilePC").click(() => {
                     $(".insertFile_btn_dropdown").css("display", 'none')
                     $(".editor_dataModal").css("display", 'flex')
                     $(".createFilePC_dataModal_content").css("display", 'block')
                     document.getElementById('file-selector').addEventListener('change', event => {
                         const file = event.target.files[0];
                         const reader = new FileReader();
                         console.log(count)
                         reader.addEventListener('load', event => {
                             files = event.target.result;
                         });
                         reader.readAsDataURL(file);
                     });
                 })

                 $(".createFilePC_insertBtn").click(() => {
                     var val = files;
                     console.log(files)
                     files = null;
                     if (val && restoreSelection(cur_p)) {
                         // restoreSelection(cur_p)
                         document.execCommand('insertHTML', false, '<a href="' + val + '" download>' + 'Скачать документ' + '</a>');
                         $('#file-selector').val('')
                         $(".editor_dataModal").css("display", 'none')
                         $(".createFilePC_dataModal_content").css("display", 'none')
                         status.attr('status','off')
                     }

                 })
                status.attr('status','on')
             }
             else{
                 $(this).parent().find('.insertFile_btn_dropdown').css("display", 'none')
                 $(this).attr('status','off')
             }
             $(".img_cancleBtn").click(() => {
                 $(".editor_dataModal").css("display", 'none')
                 $(".imgUrl_dataModal_content").css("display", 'none')
                 $(".imgFile_dataModal_content").css("display", 'none')
                 $(".createFileUrl_dataModal_content").css("display", 'none')
                 $(".createFilePC_dataModal_content").css("display", 'none')
                 $(".toolbar_btn[data-cmd='insertFile']").attr('status', 'off')
                 $('#img-selector').val('')
                 files = null;

             })
         })
    })

    var editor_btns = document.querySelectorAll('.toolbar_btn');

    for (const ebtns of editor_btns) {
        ebtns.addEventListener('click', function (event) {
            var cmd = ($(this).attr('data-cmd'));
            if (cmd != null) {
                if (cmd != "veiwCode") {
                    if (cmd == 'H1' || cmd == 'H2' || cmd == 'H3') {
                        document.execCommand('formatBlock', false, cmd);
                    } else if (cmd == 'insertFile') {
                        var btn_stat = $(".toolbar_btn[data-cmd='insertFile']").attr('status')
                        if (btn_stat == "off") {
                            // $(".insertFile_btn_dropdown").css("display", 'block')




                            // $(".toolbar_btn[data-cmd='insertFile']").attr('status', 'on')
                        } else {
                            // $(".insertFile_btn_dropdown").css("display", 'none')
                            // $(".toolbar_btn[data-cmd='insertFile']").attr('status', 'off')
                        }


                        $(".img_cancleBtn").click(() => {
                            $(".editor_dataModal").css("display", 'none')
                            $(".imgUrl_dataModal_content").css("display", 'none')
                            $(".imgFile_dataModal_content").css("display", 'none')
                            $(".FileUrl_dataModal_content").css("display", 'none')
                            $(".FilePC_dataModal_content").css("display", 'none')
                            $(".toolbar_btn[data-cmd='insertFile']").attr('status', 'off')
                        })
                    } else if (cmd == 'createLink') {
                        $(".editor_dataModal").css("display", 'flex')
                        $(".createUrl_dataModal_content").css("display", 'block')
                        $(".createUrl_insertBtn").click(() => {
                            var val = $(".createUrl_inp").val()
                            // console.log(cur_p)
                            if (val && restoreSelection(cur_p)) {
                                // restoreSelection(cur_p)
                                document.execCommand('createLink', false, val);
                                $(".createUrl_inp").val("")
                                $(".editor_dataModal").css("display", 'none')
                                $(".imgUrl_dataModal_content").css("display", 'none')
                            }
                        })
                        $(".createUrl_cancleBtn").click(() => {
                            $(".editor_dataModal").css("display", 'none')
                            $(".createUrl_dataModal_content").css("display", 'none')
                        })
                    } else {
                        document.execCommand(cmd);
                    }
                } else {
                    displayLN()
                    var state = ($(this).attr('status'));

                    // console.log(state)
                    if (state == 'off') {
                        var content = $(".editor_body").html()
                        console.log(content);

                        $(".editor_body").text(content).css({
                            "background": '#0f1316',
                            "width": 'calc(100% - 35px)',
                            "color": '#00ffc3',
                            "font-family": "'Quicksand', sans-serif"
                        })
                        $(".lineNumber").css("display", 'block')
                        $(this).attr('status', 'on')

                    } else {
                        var content = $(".editor_body").text()
                        $(".editor_body").html(content).css({
                            "background": '#ffecff',
                            "width": '100%',
                            "color": '#000000',
                            "font-family": 'Inter'
                        })
                        $(".lineNumber").css("display", 'none')
                        $(this).attr('status', 'off')
                    }
                    displayLN()
                }
            }
        });
    };


    // function boldCommand() {
    //     const strongElement = document.createElement("b");
    //     const userSelection = window.getSelection();
    //     const selectedTextRange = userSelection.getRangeAt(0);
    //     selectedTextRange.surroundContents(strongElement);
    // }
});