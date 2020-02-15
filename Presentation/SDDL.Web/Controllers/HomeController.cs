using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SDDL.Web.Models;
using SDDL.Web.Services.Interface;

namespace SDDL.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ISpaService _spaService;

        public HomeController(
            ILogger<HomeController> logger,
            ISpaService spaService
        )
        {
            _logger = logger;
            _spaService = spaService;
        }

        public IActionResult Index()
        {
            return PhysicalFile(_spaService.GetIndexFilePath(), "text/html");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
