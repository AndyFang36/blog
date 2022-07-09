import {Grain, Home, Whatshot} from "@mui/icons-material";
import {Box, Breadcrumbs, Container, Divider, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {CategoryMenu} from "../../common/components/CategoryMenu";
import "../../assets/styles/TechnologyPage.css";

export const TechnologyPage = () => {
    return (
        <Container id='TechnologyPage'>
            <Grid container spacing={2}>
                <Grid item xs={8} md={3} lg={3} xl={4}>
                    <CategoryMenu/>
                </Grid>
                <Grid item xs={4} md={9} lg={9} xl={8}>
                    <Box>
                        <Breadcrumbs aria-label='breadcrumb'>
                            <Link
                                underline='hover'
                                sx={{display: "flex", alignItems: "center"}}
                                color='inherit'
                                to='/'
                            >
                                <Home sx={{mr: 0.5}} fontSize='inherit'/>
                                主页
                            </Link>
                            <Link
                                underline='hover'
                                sx={{display: "flex", alignItems: "center"}}
                                color='inherit'
                                to='/getting-started/installation/'
                            >
                                <Whatshot sx={{mr: 0.5}} fontSize='inherit'/>
                                Core
                            </Link>
                            <Typography
                                sx={{display: "flex", alignItems: "center"}}
                                color='text.primary'
                            >
                                <Grain sx={{mr: 0.5}} fontSize='inherit'/>
                                Breadcrumb
                            </Typography>
                        </Breadcrumbs>
                    </Box>
                    <Divider/>
                    <Box className='content'>
                        <Typography variant="h4" component="h4">想和你一起慢慢变老</Typography>
                        一个人静静的凝望着晦暗的天空，阴霾弥漫的苍穹让人有了些许的落寞。

　　孤寂的风吹开了笔端深处褶皱的想念，萦绕在跌宕起伏的心间，脑海放映着旧日缱绻的缠绵，妖娆着以前唯美的国度，洋溢着身心皆暖的幸福。你的深情脉脉有如初秋的细雨洗涤着我心灵的尘埃，我沉醉在你柔情似水的剪影里，祈盼着时光的滞留，渴望着将此旖旎绣成一副美轮美奂的画卷装裱成框，织就我的梦。

　　只是，亲爱的，今日这霏霏细雨是否也会浓稠你对我的思念?你是否也如往昔般在烟雨江南的雕栏曲处将你我的红尘绘制成娟?你曾说你喜爱诗情画意的生活，亲爱的，等我们暮年白发苍苍的时候，我们一齐执手烟雨湖畔，看春日里百花争艳，秋日里荷映碧蓝，你作曲我抚琴，共谱一曲绝世潇湘，好吗

　　繁华盛世的岁月，与你相守在红尘，有你千般疼爱万般宠溺，我已感知足，每一天处在安暖里，将心湖的一抹涟漪徜徉在文字的平仄里，看着那些幻化的空灵翩跹着灵魂的萌动，看着你来过的痕迹，这又怎能不是一种幸福!为了你，我甘情绪愿就此成论，我愿意在你赋予的一寸圈地蜗居一世，即便是只能在臆想里期遇，即便只能是千里两相隔，即便是一路春色，我也只唯你此处风景独好。亲爱的，只是我想你的时候你是否也在想我?是否能在灵犀里听到我想你时的心跳脉搏

　　空中的雨越来越密集，伸出手鞠一捧清凉，碎碎的雨点淋湿了我浅蓝色的纱罗，那氤氲而开的点滴就好似我想你时溅起的泪花，层叠在时光里，凝聚在墨砚里，泼洒在铺陈的红笺里，撰写着有你的词章。

　　未遇你之前，我总在多愁善感的忧伤里凌乱的描摹着人生的境遇，直到相遇你的那天，我的笔下不再有残篇断章，不再感叹生命的脆弱，不再悲怜人情的冷暖，你就像熊熊燃烧的火焰激发着我对生活的热情，磅礴着我心灵深处对生命、对尘世的眷恋，我不再是独倚寒窗的女子，不再悲沧红颜薄命的哀怨。你救了我的心，给了我应对现实的毅然，你说你是我依靠的大山，你会给我一世的温暖，你没有只是语言的承诺，你用实际的行动给了我人间最真的情感，你的真诚、你的淳朴、你的关怀，无一不是在宣证着你对我的爱，此生遇上你，已是我今生最大的幸福，纵然今生换不来执子之手与子偕老的那一天，即便最终我只是你生命旅程里的一个过客，那也是留给了我满世界的斑斓，也够我眷恋一生。

　　亲爱的，知道吗?多少夜深人静的夜晚，你深入我的梦，与你花前月下，与你面面相觑，与你罗帐共枕，只是醒来已然泪满襟，方感情到深处人孤独。（美文网 www.meiwen.net.cn）

　　如果今生没有与你相遇，也许我会绝迹红尘，也就无从感受人世间还有这样根深的牵念，倾心一个人，牵念一座城，不需要太多的言语，只是一个凝眸便是永恒，天涯也只是咫尺的距离。佛说前五百次的回眸才换来今生的一次擦肩，那么你我的相遇是否是千百年的轮回才换来今生的相守?好想与你就这样慢慢变老，看春花秋月更替的轨迹，看红尘辗转的轮回，期望着来世再一次的相逢不再是一地相思两地愁的凄美。

　　尽管与你没有月上柳梢头，人约黄昏后的浪漫;没有唇齿相依十指相扣的缠绵，却也有着你若不离，我便不弃的执念，低吟浅唱，看细水长流的嫣然。

　　喜爱看你略带羞涩的笑意，喜爱你指尖萦绕的温柔穿过层叠的烟岚，趟过万川河流，蔓延至我身体的每一处角落，释放我想你的情柔;喜爱那溢出眼角的晶莹，凝结成千年琥珀盛装流年里的安暖，许下弱水三千，只取一瓢饮的痴念。喜爱你侃侃而谈的婉约风雅，刻画在我的眉间;喜爱与你共沐一场红尘的春雨，一齐抖落世俗的牵绊。

　　年华似玉，剔透在你我的红尘深处，此生，我已别无所求，只想在这墨字凝香的书签里，着下有你的诗行，不再低语感情只是童话的断句。

　　雨落相思顾，牵念如许;舌结丁香处，冰心层出;纵，沧海水覆，不问何故……
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
