"use strict";

function getTime(){
    var d = new Date(), hours = d.getHours(), min = d.getMinutes();
    return (hours >= 10 ? hours : "0" + hours) + ":" + (min >= 10 ? min : "0"+ min)
}

function getDateCN(){
    var d = new Date(), n;
    switch(d.getDay()){
        case 0:
            n = "日";
            break;
        case 1:
            n = "一";
            break;
        case 2:
            n = "二";
            break;
        case 3:
            n = "三";
            break;
        case 4:
            n = "四";
            break;
        case 5:
            n = "五";
            break;
        case 6:
            n = "六";
            break;
    }
    return (d.getMonth() + 1 + "月") + (d.getDate() + "日") +  "星期" + n;
}

(function(){

    var Content = React.createClass({

        getInitialState: function(){
            return { frame: 1 }
        },

        nextFrameHandler: function(){
            if(this.state.frame < 5) this.setState({frame: this.state.frame + 1});
        },

        reloadHandler: function(){
            document.getElementById('audioEnding').pause();
            this.setState({frame: 1})
        },

        render: function(){
            return React.DOM.div({},
                (this.state.frame == 1 ? React.createElement(Content.Frame1, {callback: this.nextFrameHandler}) : null),
                (this.state.frame == 2 ? React.createElement(Content.Frame2, {callback: this.nextFrameHandler}) : null),
                (this.state.frame == 3 ? React.createElement(Content.Frame3, {callback: this.nextFrameHandler}) : null),
                (this.state.frame == 4 ? React.createElement(Content.Frame4, {callback: this.nextFrameHandler}) : null),
                (this.state.frame == 5 ? React.createElement(Content.Frame5, {reload: this.reloadHandler}) : null)
                )
        }
    });

    Content.Frame5 = React.createClass({
        getInitialState: function(){
            return {
                show_share_cover: false,
				show_share_img: false
            }
        },
        shareHandler: function(){
            this.setState({
				//show_share_img: true,
				show_share_cover: !this.state.show_share_cover
			})
        },
        componentDidMount: function(){
            document.getElementById('audioEnding').play();
        },
        render: function(){
            return React.DOM.div({className: "frame5"},
                React.DOM.div({ className: "share-big-img" },
                    React.DOM.img({
                        src: this.state.show_share_img ? "images/cover.png" : "images/frame_5_a.jpg",
                        className: this.state.show_share_cover ? null : "mt-51"
                    })
                ),
                React.DOM.div({className: "share-panel"},
                    // React.DOM.div({className: "text", onClick: this.shareHandler}, "中国核电祝您和您的家人新春快乐"),
                    // React.DOM.div({className: "text", onClick: this.shareHandler}, "向节日期间坚守岗位的员工们致敬"),
                    React.DOM.div({className: "share", onClick: this.shareHandler}, "分享"),
                    React.DOM.div({className: "reload", onClick: this.props.reload}, "再看一次")
                    ),
                React.DOM.img({src: "images/frame_5_b.jpg"}),
                (this.state.show_share_cover ?
                    React.DOM.div({className: "cover", onClick: this.shareHandler}, React.DOM.div({className: "bg"}), "点击右上角按钮，分享给好友") :
                    null)
                )
        }
    });

    Content.Frame4 = React.createClass({
        getInitialState: function(){
            return {
                talking: false,
                finish_flag: false,
                called_callback: false
            }
        },
        acceptHandler: function(){
            document.getElementById("audioWexinRing").pause();
            document.getElementById("audioGreeting").play();
            this.setState({talking: true});
            setTimeout(function(){
                document.getElementById("audioGreeting").pause();
            }.bind(this), 47000)

            setTimeout(function(){
                if(!this.state.called_callback) {
                    this.props.callback();
                }
            }.bind(this), 55000)

            setTimeout(function(){
                this.setState({finish_flag: true})
            }.bind(this), 46000)
        },

        stopHandler: function(){
            if(this.state.finish_flag) {
                this.props.callback();
                this.setState({called_callback: true})
                document.getElementById('audioEnding').play();
            }
        },

        render: function(){
            return React.DOM.div({className: "frame4"},
                    React.DOM.div({className: "caller-name"}, "陈桦"),
                    React.DOM.div({className: "caller-way"}, "中国核电 总经理"),
                    (this.state.talking ? null : React.DOM.div({className: "accept", onClick: this.acceptHandler}, null)),
                    (this.state.talking ?
                     React.DOM.div({className: "talking"},
                         (this.state.finish_flag ? React.DOM.div({className: "p2 focus", onClick: this.stopHandler}) : null),
                         React.DOM.img({className: "p1", src: "images/btn-camera3.png"}),
                         React.DOM.img({className: "p2", src: "images/btn-off.png", onClick: this.stopHandler}),
                         React.DOM.img({className: "p3", src: "images/btn-quiet.png"})
                        ) :
                     null)
                );
        }
    });

    Content.Frame3 = React.createClass({
        getInitialState: function(){
            this.cards = [ {
                class_name: "summary",
                text: "又要过年了"
            }, {
                class_name: "summary",
                text: "这一年时间过得真快啊"
            }, {
                class_name: "summary",
                text: "都没时间停下来回头看看"
            }, {
                class_name: "summary",
                text: "我们的公司，这一年都经历了哪些"
            }, {
                class_name: "bg-qing",
                img: "images/hui_gu_1.jpg"
            }, {
                class_name: "bg-lv",
                img: "images/hui_gu_2.jpg"
            }, {
                class_name: "bg-lan",
                img: "images/hui_gu_3.jpg"
            }, {
                class_name: "bg-qing",
                img: "images/hui_gu_4.jpg"
            }, {
                class_name: "bg-qing",
                img: "images/hui_gu_5.jpg"
            }, {
                class_name: "bg-huang",
                img: "images/hui_gu_6.jpg"
            }, {
                class_name: "summary",
                text: "确实啊"
            }, {
                class_name: "summary",
                text: "2015年，中国核电好消息还真多"
            } ];
            return {
                show_card_index: 0,
                hide_card_index: -1
            }
        },

        nextFrame: function(){
            document.getElementById("audioHuiGu").pause();
            document.getElementById("audioWexinRing").play();
            clearInterval(this.interval);
            this.props.callback();
        },

        show_tick: function(){
            if(this.state.show_card_index >= this.cards.length - 1){
                clearInterval(this.show_interval);
            } else {
                this.setState({show_card_index: this.state.show_card_index + 1})
            }
        },

        hide_tick: function(){
            if(this.state.hide_card_index >= this.cards.length -2) {
                clearInterval(this.hide_interval);
                return;
            }
            this.setState({hide_card_index: this.state.hide_card_index + 1})
        },

        componentDidMount: function(){
            document.getElementById("audioHuiGu").play();
            this.hide_interval = setInterval(this.hide_tick, 6000)
            setTimeout(function(){
                this.show_interval = setInterval(this.show_tick, 6000);
            }.bind(this), 1000)

            setTimeout(this.hide_tick, 3000);
            setTimeout(this.show_tick, 4000);

            setTimeout(this.hide_tick, 56000);
            setTimeout(this.show_tick, 57000);
        },

        render: function(){

            return React.DOM.div({className: "frame3"},
                    this.cards.map(function(card, index){
                        var show = this.state.show_card_index == index && this.state.hide_card_index != index;

                        if(index < 4 && this.state.show_card_index > index && this.state.show_card_index < 4) show = true;

                        if(index > 9 && this.state.show_card_index > index && this.state.show_card_index > 9) show = true;

                        return React.DOM.div({
                                className: card.class_name + (show ? " show" : ""),
                                key: index
                            },
                            (card.img ? React.DOM.img({src: card.img}) : null),
                            (card.text ? React.DOM.div({className: "p" + index}, card.text) : null),
                            (index == 11?
                                React.DOM.div({className: "more", onClick: this.nextFrame},
                                    React.DOM.div({className: "focus"}, null),
                                    React.DOM.img({src: "images/suprise.png"}, null)
                                    ) :
                                null
                                )
                            )
                    }.bind(this))
                )
        }
    })

    Content.Frame2 = React.createClass({

        getInitialState: function(){
            this.backup = [
    {
        type: "text",
        avatar: "images/avatar_boss.png",
        user: "老大",
        text: "大家都回家了没？",
        align: "left"
    }, {
        type: "text",
        user: "实习生 小赵",
        avatar: "images/avatar_worker.png",
        text: "报告老大，我已经在火车上了，回去和小伙伴说，咱也是上市公司的打工仔了，嘿嘿，大伙新年快乐，过年回来见哈~"
    }, {
        avatar: "images/avatar_girl.png",
        user: "唯一女汉子 翠花",
        text: "还是老妈的菜好吃，完了，这样吃我嫁不出去了，泪… "
    }, {
        type: "image",
        user: "唯一女汉子 翠花",
        avatar: "images/avatar_girl.png",
        src: "images/cai.jpg"
    }, {
        avatar: "images/avatar_master.jpg",
        user: "师父老张",
        text: "孩子们明天回来，和老伴在超市买东西呢，老大生了二胎，他奶奶等不及见孙女了"
    }, {
        avatar: "images/avatar_boss.png",
        user: "老大",
        text: "@读者微信名 你回家了没？"
    }, {
        align: "right",
        user: "读者",
        avatar: "",
        text: "我还没回呢，除夕的飞机，当天有个活要交接完才好离开 "
    }, {
        avatar: "images/avatar_worker.png",
        user: "实习生 小赵",
        text: "报告老大，那个活是@读者微信名 替我干的，去年大修就已经替我一次了，说啥好啊！"
    }, {
        avatar: "images/avatar_girl.png",
        user: "唯一女汉子 翠花",
        text: "嗯，@读者微信名 平时工作教了我好多，是我心中的男神啊，以后找男盆友就找你这样的，过年回来给你带我妈的拿手菜"
    }, {
        avatar: "images/avatar_master.jpg",
        user: "师父老张",
        text: "@读者微信名 干活别太拼了，注意休息，早点回家"
    }, {
        avatar: "",
        user: "读者",
        text: "恩恩。",
        align: "right"
    }
            ];

            return {
                focus: false,
                messages: [],
                mine_messages: []
            }
        },

        appendMessage: function(){
            if(this.backup.length < 1) {
                clearInterval(this.tick);
                this.setState({focus: true});
            } else {
                //document.getElementById('audioXiu').play();
                document.getElementById('audioDing').play();
                var m = this.state.messages;
                m.push(this.backup.shift())
                //this.setState({messages: [this.backup.shift()].concat(this.state.messages)})
                this.setState({messages: m});
            }
        },

        componentDidMount: function(){
            this.appendMessage();
            this.tick = setInterval(this.appendMessage, 3000)
        },

        render: function(){
            return React.DOM.div({
                    className: "frame2"
                },
                React.DOM.div({className: "keyboard"},
                    React.DOM.div({className: ""},
                        React.DOM.img({className: "", src: "images/icon-camera2.png"}, null),
                        React.DOM.div({className: "type-in"},
                            React.DOM.input({className: ""}, null)
                            ),
                        React.DOM.div({className: "btn-send"}, "SEND")
                        ),
                        this.state.focus ? React.DOM.div({className: "focus", onClick:this.props.callback}, null) : null
                    ),

                React.DOM.div({className: "chatroom"},
                    this.state.messages.map(function(item, index){
                        return React.DOM.div({
                                key: index,
                                className: (item.align == "right" ? "send" : "receive"),
                                style: {
                                    padding: (item.type == 'image' ? '0' : null)
                                }
                            },
                            React.DOM.img({className: 'avatar', src: item.avatar}),
                            (item.align == "right" ? null : React.DOM.div({className: 'username'}, item.user)),
                            (item.type == 'image' ? null : React.DOM.div({className: 'tail'})),
                            (item.type == "image" ? React.DOM.img({src: item.src, style: {width: '321px', height: '220px', }}): item.text),
                            (index == 7 ? React.DOM.img({src: "images/6.gif"}) : null)
                            );
                    })
                )
            )
        }
    });

    Content.Frame1 = React.createClass({

        render: function(){
            return React.DOM.div({
                    className: "frame1"
                },
                React.createElement(Content.Frame1.DateTime, null),
                React.createElement(Content.Frame1.PushedMessage, {
                    callback: this.props.callback
                })
                );
        }

    });

    Content.Frame1.DateTime = React.createClass({

        getInitialState: function(){
            return {
                time: getTime(),
                date: getDateCN()
            }
        },

        render: function(){
            return React.DOM.div({className: "date-time"},
               React.DOM.div({className: "time"}, this.state.time),
               React.DOM.div({className: "date"}, this.state.date)
            );
        }
    });

    Content.Frame1.PushedMessage = React.createClass({
        getInitialState: function(){
            this.messages = [ {
                    title: "老大",
                    text: "大家都回家了没？"
                }
            ].reverse();
            this.touchedIndex = null;
            this.offsetLeft = null;
            this.show_focus = false;

            return { messages: [] }
        },

        rightTouchStartHandler: function(event, index){
            this.touchedIndex = index;
            this.offsetLeft = event.touches[0].clientX;
        },

        rightTouchMoveHandler: function(event){
            if(this.touchedIndex === null) return;
            var offset = event.touches[0].clientX - this.offsetLeft;
            if(offset < 1) return;
            var m = this.state.messages;
            m[this.touchedIndex].offset = offset;
            this.setState({messages: m});
        },

        lockTouchStartHandler: function(event){
            this.lockOffsetLeft = event.touches[0].clientX;
        },

        lockTouchMoveHandler: function(event){
            var offset = event.touches[0].clientX - this.lockOffsetLeft;
            if(offset < 1) return;
            this.setState({lockBtnOffset: offset})
        },

        touchEndHandler: function(){
            this.props.callback()
        },

        tick: function(){
            if(this.messages.length <= 1) clearInterval(this.interval);
            var m = this.state.messages;
            m.push(this.messages.pop());
            playDing();
            setTimeout(function(){
                this.setState({messages: m.reverse()});
            }.bind(this), 800)
        },

        componentDidMount: function(){
            this.interval = setInterval(this.tick, 1000);
            setTimeout(function(){
                this.setState({show_focus: true});
            }.bind(this), 2000)
        },

        render: function(){
            var _this = this;
            var messageTip = function(item, index){
                return React.DOM.div({
                        className: "msg",
                        style: { left: item.offset+'px' },
                        onTouchStart: function(event){_this.rightTouchStartHandler(event, index)},
                        onTouchEnd: _this.touchEndHandler
                    },
                   React.DOM.div({className: "from"}, item.title, '现在'),
                   React.DOM.div({className: "text"}, item.text),
                   React.DOM.div({className: "reply"}, '滑动来回复')
                );
            }

            return React.DOM.div({
                    className: "pushed-msg-list",
                    onTouchMove: this.rightTouchMoveHandler
                },
                (this.state.show_focus ? React.DOM.div({className: "focus"}, null) : null),
                this.state.messages.map(messageTip),
                    React.DOM.div({
                        className: "unlock",
                        style: { left: this.state.lockBtnOffset+'px' },
                        onTouchStart: this.lockTouchStartHandler,
                        onTouchMove: this.lockTouchMoveHandler,
                        onTouchEnd: this.touchEndHandler
                    },
                    React.DOM.div({className: "unlock-btn"}, '滑动来解锁'),
                    React.DOM.img({className: "camera-btn", src: "images/icon-camera.png"}, null)
                    )
                )
        }
    });

    ReactDOM.render(React.createElement(Content, {}),
        document.getElementById("container"));
})();

function playDing(){
    document.getElementById("audioDing").play();
}

/*
var GLOBAL = {
    debug: false,
    appId: "。。。",
    timestamp: "。。。",
    nonceStr: "。。。",
    signature: "。。。"
}
var shareData = {
    title: "greeting from China nuclear",
    desc: "You got a greeting message, please check it",
    link: "http://123.57.17.145:8008/demo/2015-12-31/happy-new-year.html",
    imgUrl: "",
    link: "http://123.57.17.145:8008/demo/2015-12-31/happy-new-year.html",
    success: function(){
        console.log("success to share")
    }

}
wx.config({
    debug: GLOBAL.debug,
    appId: GLOBAL.appId,
    timestamp: GLOBAL.timestamp,
    nonceStr: GLOBAL.nonceStr,
    signature: GLOBAL.signature,
    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
}),
wx.ready(function() {
    wx.onMenuShareAppMessage(shareData),
    wx.onMenuShareTimeline(shareData),
    wx.onMenuShareQQ(shareData),
    wx.onMenuShareWeibo(shareData)
});
*/
