
import Layout from '../views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)
const newRouter = {
  path: '/businessApplication',
  component: Layout,
  name: 'businessApplication',
  alwaysShow: true,
  meta: {
    title: 'businessApplication',
    icon: 'work',
    role: ['monitor:businessApplication:businessApplication']
  },
  children: [
    {
      path: '/conjointAnalysis',
      component: _import('sys-monitoringAnalysis/dataQuery/index'),
      name: 'conjointAnalysis',
      meta: {
        title: 'conjointAnalysis',
        role: ['monitor:jointAnalysis:jointAnalysisForBranch']
      },
      children: [
        {
          // hidden: true,
          path: 'list',
          name: 'conjointAnalysis_list',
          component: _import('sys-monitoringAnalysis/conjointAnalysis/list'),
          meta: {
            title: 'conjointAnalysisList'
          }
        },
        {
          // 创建联合分析
          path: 'add',
          name: 'conjointAnalysis_add',
          component: _import('sys-monitoringAnalysis/conjointAnalysis/add'),
          meta: {
            title: 'conjointAnalysisAdd'
          },
          hidden: true
        },
        //  联合分析统计
        {
          path: 'statistics',
          name: 'conjointAnalysis_statistics',
          component: _import('sys-monitoringAnalysis/conjointAnalysis/statistics'),
          hidden: true,
          meta: {
            title: 'conjointAnalysisStatistics'
          }
        },
        {
          path: 'detail',
          name: 'conjointAnalysis_detail',
          component: _import('sys-monitoringAnalysis/conjointAnalysis/detail'),
          meta: {
            title: 'conjointAnalysisDetail'
          },
          hidden: true
        }
      ]
    },
    {
      path: '/judgedClues',
      component: _import('sys-monitoringAnalysis/dataQuery/index'),
      name: 'judgedClues',
      alwaysShow: true, // 一直显示根路由
      meta: {
        title: 'judgedClues',
        role: ['monitor:reportStudyClue:reportStudyClueForBranch']
      },
      children: [
        {
          path: 'index',
          name: 'judgedClues_index',
          component: _import('sys-monitoringAnalysis/judgedClues/index'),
          meta: {
            title: 'submit',
            role: ['monitor:reportStudyClue:queryForBranch']
          }
        },
        // {
        //   // 仅为演示使用（权限）
        //   path: 'manage',
        //   name: 'judgedClues_manage',
        //   component: _import('sys-monitoringAnalysis/judgedClues/manage'),
        //   meta: {
        //     title: 'judgedCluesManage'
        //   }
        // },
        {
          // 中心端-上报判研线索 - 移送情况
          path: 'manage/handOver',
          name: 'judgedClues_handOver',
          component: _import('sys-monitoringAnalysis/judgedClues/handOver'),
          meta: {
            title: 'analyzeManage'
          },
          hidden: true
        },
        // {
        //   // 仅为演示使用（权限）
        //   path: 'analyze',
        //   name: 'judgedClues_analyze',
        //   component: _import('sys-monitoringAnalysis/judgedClues/analyze'),
        //   meta: {
        //     title: 'analyze'
        //   },
        //   hidden: true
        // },
        // {
        //   // 仅为演示使用（权限）
        //   path: 'analyzeManage',
        //   name: 'judgedClues_analyzeManage',
        //   component: _import('sys-monitoringAnalysis/judgedClues/analyzeManage'),
        //   meta: {
        //     title: 'analyzeManage'
        //   },
        //   hidden: true
        // },
        {
          path: 'add',
          name: 'judgedClues_add',
          component: _import('sys-monitoringAnalysis/judgedClues/add'),
          meta: {
            title: 'add'
          },
          hidden: true
        },
        {
          // 中心端-上报判研线索 - 后续办理情况
          path: 'analyzeManage/subsequent',
          name: 'judgedClues_subsequent',
          component: _import('sys-monitoringAnalysis/judgedClues/subsequent'),
          meta: {
            title: 'analyzeManage'
          },
          hidden: true
        },
        {
          // 中心端-上报判研线索 - 后续办理情况 -- 添加后续办理情况
          path: 'analyzeManage/subsequent/subsequentAdd',
          name: 'judgedClues_subsequent_subsequentAdd',
          component: _import('sys-monitoringAnalysis/judgedClues/subsequentAdd'),
          meta: {
            title: 'analyzeManage'
          },
          hidden: true
        },
        {
          // 中心端-上报判研线索 - 后续办理情况 -- 查看添加历史
          path: 'analyzeManage/subsequent/subsequentHistory',
          name: 'judgedClues_subsequent_subsequentHistory',
          component: _import('sys-monitoringAnalysis/judgedClues/subsequentHistory'),
          meta: {
            title: 'analyzeManage'
          },
          hidden: true
        },
        {
          // 中心端-上报判研线索 - 统计
          path: 'statistics',
          name: 'judgedClues_statistics',
          component: _import('sys-monitoringAnalysis/judgedClues/statistics'),
          // hidden: true,
          meta: {
            title: 'judgedCluesStatistics',
            role: ['monitor:reportStudyClue:totalForBranch']
          }
        }
      ]
    },
    {
      path: '/analysisSpecial',
      component: _import('sys-monitoringAnalysis/dataQuery/index'),
      name: 'analysisSpecial',
      alwaysShow: true,
      meta: {
        title: 'analysisSpecial',
        role: ['monitor:clueAnalysisSpecial:clueAnalysisSpecialForBranch']
      },
      children: [
        {
          path: 'index',
          name: 'analysisSpecial_query',
          component: _import('sys-monitoringAnalysis/analysisSpecial/index'),
          meta: {
            title: 'analysisSpecialQuery',
            role: ['monitor:clueAnalysisSpecial:queryForBranch']
          }
        },
        {
          path: 'clueSave',
          name: 'analysisSpecial_clueSave',
          component: _import('sys-monitoringAnalysis/analysisSpecial/clue/clueSave'),
          meta: {
            title: 'analysisSpecialQuery'
          },
          hidden: true
        },
        {
          path: 'statistics',
          name: 'analysisSpecial_statistics',
          component: _import('sys-monitoringAnalysis/analysisSpecial/statistics'),
          meta: {
            title: 'analysisSpecialStatistics',
            role: ['monitor:clueAnalysisSpecial:totalForBranch']
          }
        },
        {
          path: 'applyForm',
          name: 'analysisSpecial_applyForm',
          component: _import('sys-monitoringAnalysis/analysisSpecial/applyForm'),
          meta: {
            // title: 'analysisSpecialApply',
            // role: ['monitor:clueAnalysisSpecial:application']
          },
          hidden: true
        }
      ]
    },
    // 跨境协查申请
    {
      path: '/businessManage',
      component: _import('sys-monitoringAnalysis/dataQuery/index'),
      name: 'businessManage',
      alwaysShow: true,
      meta: {
        title: 'businessManage',
        role: ['monitor:areaFunction:crossRegional']
      },
      children: [
        {
          path: 'index',
          name: 'businessManage_query',
          component: _import('sys-monitoringAnalysis/analysisSpecial/index2'),
          meta: {
            title: 'businessManage_query',
            role: ['monitor:clueAnalysisSpecial:queryForBranch']
          }
        },
        {
          path: 'clueSave',
          name: 'analysisSpecial_clueSave2',
          component: _import('sys-monitoringAnalysis/analysisSpecial/clue/clueSave2'),
          meta: {
            title: 'analysisSpecialQuery'
          },
          hidden: true
        },
        {
          path: 'statistics',
          name: 'analysisSpecial_statistics',
          component: _import('sys-monitoringAnalysis/analysisSpecial/statistics2'),
          meta: {
            title: 'analysisSpecialStatistics',
            role: ['monitor:clueAnalysisSpecial:totalForBranch']
          }
        },
        {
          path: 'applyForm',
          name: 'analysisSpecial_applyForm',
          component: _import('sys-monitoringAnalysis/analysisSpecial/applyForm'),
          meta: {
            // title: 'analysisSpecialApply',
            // role: ['monitor:clueAnalysisSpecial:application']
          },
          hidden: true
        }
      ]
    }
  ]
}
export default newRouter
