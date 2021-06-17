(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = global || self, factory(global.ALIEN = {}));
}(this, (function (exports) {
    'use strict';

    const source = ["all", "PR稿", "按钮", "版本", "包装", "饱和式攻击", "报备", "背锅", "背书", "本分", "本我", "比特币", "比心", "笔芯", "鄙视链", "壁垒", "闭环", "边际成本", "边界", "扁平化", "便捷性", "变革", "变量", "变迁", "标杆", "标杆市场", "标配", "标准", "病毒式营销", "拨冗参会", "不跟风要造风", "不可控", "不破不立", "捕获", "补位", "布局", "财务自由", "踩坑", "参与感", "操盘", "操盘手", "测试", "策略", "层级", "插个需求", "差异化", "拆解", "产品尖兵", "产业", "产业服务", "产业集群", "常态化", "长尾", "长尾理论", "场景", "场景占位", "场域", "超级符号", "超我", "超预期", "沉淀", "沉浸", "沉浸式体验", "沉没成本", "沉默用户", "成本", "吃透", "持续", "持续迭代", "持续观察", "持续集成", "持续交付", "冲击力", "抽离", "抽离透传", "抽象", "出击", "触达", "触点", "触发", "触及", "穿梭", "传话筒", "串联", "创新", "垂直", "垂直领域", "刺激", "促活", "存量维持", "存在感", "搭建", "打法", "打开率高", "打开销售通路", "打磨", "打平", "打破结界", "打破制约", "打通", "打造", "大数据", "大数据分析", "大数据杀熟", "大中台", "倒逼", "导流", "登云梯", "底层逻辑", "地毯式轰炸", "地域", "第二曲线", "颠覆式创新", "颠覆态势", "点对点", "点线面", "调性", "叠加效应", "迭代", "顶层设计", "定量", "定性", "定性定量", "订阅", "洞察", "洞自身", "兜底", "端到端", "短平快", "断舍离", "段位", "对标", "对齐", "对一下", "多维矩阵闭环", "二八定律", "发力", "反哺", "反复确认", "反思", "返佣", "方案", "方法论", "分层", "分发", "封装", "峰值", "风口", "风口上的猪", "风险", "风险可控", "孵化器", "服务", "服务产业", "浮层", "福报", "福利", "辐射", "付费", "付费社群", "复利", "复盘", "复用", "复用打法", "覆盖", "赋能", "干货", "感恩", "感知", "感知度", "高潮期", "高地", "高峰期", "高举高打", "高开低走", "高空", "高频触达", "高台跳水", "高优", "格局", "革命", "给到", "跟进", "公关", "公域", "攻坚", "躬身入局", "共创", "共建", "共情", "共享", "共享经济", "沟通协作", "构建", "构筑", "关键路径", "关键时期", "观察", "观行业", "归属感", "归因分析", "规范", "规模", "国民总时间", "过一下", "海豚湾模式", "夯实", "行军路线", "行业壁垒", "薅羊毛", "合力", "横向", "红包", "红海", "互联网红利", "互联网思维", "护城河", "划水", "画饼", "话术", "踝部", "环节", "唤醒", "回顾", "回归", "回流", "回溯", "回跳", "活跃", "活跃度", "活跃度高", "活跃用户", "获客", "击穿", "基本面", "基本盘", "基石", "基因", "机会成本", "激活", "激励", "饥饿营销", "集成", "集团战略", "加持", "加速", "价格门", "价格歧视", "价值", "价值观", "价值转化", "架构", "兼容", "监控", "剑走偏锋", "建立范式", "建立新习惯", "讲故事", "降级", "降维打法", "降维打击", "交付", "交付价值", "叫好又叫座", "接入", "结构化", "结果导向", "解决方案", "解决问题", "解耦", "解释权", "解题", "借东风", "借势营销", "进化", "进化论", "进军", "精简", "精神SPA", "精细化", "精准", "竞争力", "韭菜", "矩阵", "聚合", "聚焦", "决策路径", "绝境求生", "卡点", "卡认知", "卡位", "开辟新路径", "开场子", "开拓", "砍一刀", "颗粒度", "颗粒感", "可持续性", "可控", "可替代性", "可用性", "刻意练习", "坑位", "空白", "口碑", "跨界", "快速迭代", "快速响应", "困局", "扩展", "拉齐水位", "拉升", "拉通", "拉新", "拉新成本高", "蓝海", "冷启动", "利基市场", "利器", "力场", "联动", "连续创业者", "链路", "量化", "裂变", "临门一脚", "灵活", "流量", "流量池", "流量红利", "流量为王", "流失", "留存", "留存率高", "楼层", "漏洞", "漏斗", "逻辑", "逻辑推理", "逻辑自洽", "落地", "履约", "蚂蚁市场", "马太效应", "埋点", "锚点", "蒙层", "幂律分布", "敏捷", "明竞争", "明确", "摸索", "摸鱼", "模型", "魔方", "抹平", "母体", "幕帘", "脑暴", "脑洞", "内卷", "内容创业", "年框", "粘性", "凝聚力", "纽带", "耦合", "耦合性", "排期", "盘活", "配称", "碰一下", "皮实", "偏好植入", "品类战舰", "品牌", "品牌航母", "品牌记忆系统", "品牌露出", "品牌势能", "品效合一", "平台", "平台化", "平台战略", "瓶颈", "瓶颈期", "评估", "评审", "破冰", "破局", "破圈", "破题", "曝光", "期权", "起承转合", "起飞", "气氛组", "千人千面", "千人一面", "迁移", "强化认知", "强依赖", "抢品类", "撬动", "情怀", "情绪G点", "区块链", "驱动力", "渠道", "渠道下沉", "去中心化", "圈层", "全场景", "全方位", "全媒体", "全面封锁", "全情投入", "全球领先", "全渠道", "全域", "拳头产品", "确认", "人工智能", "人货场", "人力不足", "人无我有", "人性", "人优我变", "人有我优", "认同感", "认证", "认知", "认知优势", "容错", "容灾", "融合", "如何收口", "入口", "赛博朋克", "赛道", "三位一体", "商业模式", "上半场", "上报", "上升", "上升期", "上限", "上游", "社交货币", "社群", "深度", "深耕", "深入", "深入产业", "神交已久", "渗透", "升级", "升维定位", "声音印记", "生命周期", "生态", "生态链", "生态圈", "生态位", "时间窗口", "时间价值", "石破天惊", "使命感", "势不可挡", "势能", "势如破竹", "视觉锤", "试点", "收割", "收口", "授权", "梳理", "输出", "输血", "属性", "数据", "树立", "爽点", "水位", "水准", "顺势而为", "思考", "私域", "私域流量", "死磕", "四两拨千斤", "态势", "弹窗", "弹射起飞", "套路", "提调子", "提炼", "体感", "体感不好", "体系", "体验", "体验度量", "天花板", "天时地利人和", "天使轮", "天使投资", "填坑", "通道", "通晒", "通证经济", "同步", "同理心", "痛点", "头部", "投放", "投入产出比", "透传", "突围", "推广", "推送", "挖掘", "洼地", "外包", "完善逻辑", "玩法", "玩家", "挽留弹窗", "围绕", "维度", "文案", "稳定", "稳定性", "务实", "系统", "系统性", "系统性风险", "细分", "下半场", "下沉", "下沉市场", "下跪", "下限", "下游", "先发优势", "现象级事件", "响应", "向心力", "消费认知", "小白", "小步快跑", "小前台", "协调", "协同", "协同作战", "心动情境", "心理账户", "心力", "心智", "心智角逐", "心智切割利器", "新动力", "新国潮", "新国货", "新局势", "新零售", "新媒体", "新篇章", "新品牌", "新赛道", "新势能", "新物种", "新增长点", "信息茧房", "形态", "秀肌肉", "虚拟币", "蓄能", "延迟满足感", "延期", "演绎", "羊毛", "痒点", "腰部", "邀请", "咬合", "业务导向", "一致性", "意识形态", "易用性", "议程", "因子", "银弹", "引爆", "引爆点", "引导", "盈利", "盈利模式", "营收", "影响力", "拥抱变化", "用户调研", "用户画像", "用户粘性", "用户黏性", "用户认知", "用户体验", "用户无感知", "用户下沉", "用户心智", "用户忠诚度", "优化", "优先级", "优先级很高", "优秀", "有风险", "有机结合", "阈值", "预判", "预热期", "预言", "约束", "云计算", "载体", "造事", "造势", "造市", "造血", "增长", "增量博弈", "占场景", "占领心智", "战略合力", "战略性亏损", "战略性投资", "战略引擎", "战略支点", "战役", "召回", "遮罩", "真实场景", "真香", "真香定律", "阵地", "整合", "正态分布", "证言", "支撑", "支持", "支棱起来", "支援", "知识付费", "执行力", "指标", "制高点", "制约", "智慧城市", "致敬", "中台", "中央厨房", "忠诚度", "终端", "众筹", "重磅", "重度用户", "重塑", "重新定义", "重组", "主战场", "助力", "铸造", "抓包", "抓手", "转化", "转化率", "转型", "姿态", "资深玩家", "资源", "资源紧张", "资源配置", "资源倾斜", "资源位", "资源置换", "自媒体", "自媒体矩阵", "自洽", "自我", "综合评估", "总结沉淀", "纵向", "走出去", "组合拳", "组局", "最大公约数", "最高规制", "最后一公里", "最优解"];
    const source_len = source.length;
    const source_key = source.join();
    const source_map = source.reduce(function (map, obj, index) {
        map[obj] = index;
        return map;
    }, {});

    const makeCRCTable = function () {
        let c;
        const crcTable = [];
        for (let n = 0; n < 256; n++) {
            c = n;
            for (let k = 0; k < 8; k++) {
                c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
            }
            crcTable[n] = c;
        }
        return crcTable;
    };

    const crc32 = function (str) {
        const crcTable = window.crcTable || (window.crcTable = makeCRCTable());
        let crc = 0 ^ (-1);

        for (let i = 0; i < str.length; i++) {
            crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
        }

        return (crc ^ (-1)) >>> 0;
    };

    let seed;

    function random_seed(s) {
        seed = s;
    }

    function random() {
        seed ^= seed << 13;
        seed ^= seed >> 17;
        seed ^= seed << 5;
        return seed;
    }

    function rc4(key, str) {
        let i;
        let s = [], j = 0, x, res = '';
        for (i = 0; i < 256; i++) {
            s[i] = i;
        }
        for (i = 0; i < 256; i++) {
            j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
        }
        i = 0;
        j = 0;
        for (let y = 0; y < str.length; y++) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
            res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
        }
        return res;
    }

    function encode(inputArea) {
        let index;
        let i;
        random_seed(crc32(source_key));
        inputArea = inputArea.trim();
        const len = inputArea.length;
        if (len <= 0) {
            document.getElementById("outputArea").value = "";
            return;
        }
        let key;
        for (i = 0; i < len; i++) {
            key = source[Math.abs(random()) % source_len];
        }
        const base = Math.abs(random()) % 10 + 7;
        const start = Math.abs(random()) % source_len;
        const dst = rc4(key, inputArea);
        let dststr = "";
        let last = start;
        for (i = 0; i < dst.length; i++) {
            const c = dst.charCodeAt(i);
            const hc = (c >> 8) & 0xFF;
            const lc = c & 0xFF;
            {
                index = last + hc + base;
                if (index >= source_len) {
                    index = index % source_len;
                }
                dststr += source[index] + " ";
                last = index;
            }
            {
                index = last + lc + base;
                if (index >= source_len) {
                    index = index % source_len;
                }
                dststr += source[index] + " ";
                last = index;
            }
        }
        return dststr;
    }

    function decode(outputArea) {
        let index;
        let i;
        random_seed(crc32(source_key));
        outputArea = outputArea.trim();
        const src = outputArea.split(/\s+/);
        if (src.length <= 0) {
            document.getElementById("inputArea").value = "";
            return;
        }
        if (src.length % 2 !== 0) {
            document.getElementById("inputArea").value = "length error";
            return;
        }
        const len = src.length / 2;
        let key;
        for (i = 0; i < len; i++) {
            key = source[Math.abs(random()) % source_len];
        }
        const base = Math.abs(random()) % 10 + 7;
        const start = Math.abs(random()) % source_len;
        let srcstr = "";
        let last = start;
        for (i = 0; i < src.length; i += 2) {
            const hc = src[i];
            const lc = src[i + 1];
            const hindex = source_map[hc];
            if (hindex == null) {
                document.getElementById("inputArea").value = "keyword error " + hc;
                return;
            }
            const lindex = source_map[lc];
            if (lindex == null) {
                document.getElementById("inputArea").value = "keyword error " + lc;
                return;
            }
            let srchc;
            let srclc;
            {
                index = hindex - last - base;
                if (index < 0) {
                    index += source_len;
                }
                srchc = index;
                last = hindex;
            }
            {
                index = lindex - last - base;
                if (index < 0) {
                    index += source_len;
                }
                srclc = index;
                last = lindex;
            }
            const srcc = ((srchc & 0xFF) << 8) | (srclc & 0xFF);
            srcstr += String.fromCharCode(srcc);
        }
        return rc4(key, srcstr);
    }

    exports.encode = encode;
    exports.decode = decode;
})));
