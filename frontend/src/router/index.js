import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import store from '../store/index'
import BookDetails from '../components/BookDetails.vue'
import Family from '../views/Family.vue'
import AddPrize from '../views/AddPrize.vue'
import Activity from '../views/Activity'
import ActivityList from '../components/ActivityList'
import EditPrize from '../components/EditPrize.vue'
import ReadingList from '../views/ReadingList.vue'
import PrizeDetails from '../components/PrizeDetails.vue'
import TestActivity from '../views/TestActivity.vue'

Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/logout",
            name: "logout",
            component: Logout,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/bookDetails",
            name: "bookDetails",
            component: BookDetails
        },
        {
            path: "/family",
            name: "family",
            component: Family
        },
        {
            path: "/addPrize",
            name: "add-prize",
            component: AddPrize
        },
        {
            path: "/activity",
            name: "activity",
            component: Activity
        },
        {
            path: '/activities',
            name: 'activity-list',
            component: ActivityList
        },
        {
            path: "/editPrize",
            name: "edit-prize",
            component: EditPrize
        },
        {
            path: '/readingList',
            name: 'reading-list',
            component: ReadingList
        },
        {
            path: '/prizeDetails',
            name: 'prize-details',
            component: PrizeDetails
        },
        {
            path: 'testActivity',
            name: 'test-activity',
            component: TestActivity
        }
    ]
})

router.beforeEach((to, from, next) => {
    // Determine if the route requires Authentication
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

    // If it does and they are not logged in, send the user to "/login"
    if (requiresAuth && store.state.token === '') {
        next("/login");
    } else {
        // Else let them go to their next destination
        next();
    }
});

export default router;