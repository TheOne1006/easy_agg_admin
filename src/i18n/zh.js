import chineseMessages from 'ra-language-chinese';

export default {
  ...chineseMessages,
  pos: {
    search: '搜索',
    configuration: 'Configuration',
    language: '语言',
    theme: {
      name: '主题',
      light: '亮系',
      dark: '黑系',
    },
    dashboard: {
      monthly_revenue: 'Monthly Revenue',
      new_orders: 'New Orders',
      pending_reviews: 'Pending Reviews',
      new_customers: 'New Customers',
      pending_orders: 'Pending Orders',
      order: {
        items:
          'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
      },
      welcome: {
        title: 'Welcome to react-admin demo',
        subtitle:
          "This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
        aor_button: 'react-admin site',
        demo_button: 'Source for this demo',
      },
    },
  },
  resources: {
    Report: {
      name: '报表',
      fields: {
        id: 'ID',
        name: '报表名称',
        key: '报表唯一值',
        desc: '描述',
        createAt: '创建时间',
        updateAt: '更新时间',
        projectId: '所属项目',
        intervalType: '计时类型',
        scopeDay: '区间天数',
        scopeHour: '区间时段',
        includeStrategies: '包含策略',
      }
    },
    Project: {
      name: '项目',
      fields: {
        id: 'ID',
        name: '项目名称',
        desc: '项目描述',
        createAt: '创建时间',
        updateAt: '更新时间',
        reports: '相关报表'
      }
    },
    StrategyType: {
      name: '策略类型',
      fields: {
        id: 'ID',
        name: '策略类型名称',
        key: '策略类型唯一值',
        desc: '描述',
        createAt: '创建时间',
        updateAt: '更新时间',
      }
    },
    Strategy: {
      name: '策略',
      fields: {
        id: 'ID',
        name: '策略名称',
        key: '策略唯一值',
        scope: '作用域',
        typeId: '策略类型',
        projectId: '所属项目',
        desc: '描述',
        matchFields: '匹配字段信息',
        uniqueField: '唯一值判断字段',
        incField: '增加值字段',
        intervalType: '计时类型',
        groupFields: '分组字段',
        sumField: '求和字段',
        createAt: '创建时间',
        updateAt: '更新时间'
      }
    },
    Category: {
      name: 'Category |||| Categories',
      fields: {
        products: 'Products',
      },
    },
    Review: {
      name: 'Review |||| Reviews',
      fields: {
        'customer.id': 'Customer',
        'command.id': 'Order',
        'product.id': 'Product',
        date_gte: 'Posted since',
        date_lte: 'Posted before',
        date: 'Date',
        comment: 'Comment',
        rating: 'Rating',
      },
      action: {
        accept: 'Accept',
        reject: 'Reject',
      },
      notification: {
        approved_success: 'Review approved',
        approved_error: 'Error: Review not approved',
        rejected_success: 'Review rejected',
        rejected_error: 'Error: Review not rejected',
      },
    },
    Segment: {
      name: 'Segments',
      fields: {
        customers: 'Customers',
        name: 'Name',
      },
      data: {
        compulsive: 'Compulsive',
        collector: 'Collector',
        ordered_once: 'Ordered once',
        regular: 'Regular',
        returns: 'Returns',
        reviewer: 'Reviewer',
      },
    },
  },
};
