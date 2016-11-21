using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angular2QuickStartWithWebpack.Startup))]
namespace Angular2QuickStartWithWebpack
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
